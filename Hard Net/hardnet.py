# -*- coding: utf-8 -*-
"""
Created on Sat Dec  5 01:01:47 2020

@author: Alex
"""

import os 
import torch
import torch.nn as nn
import torch.nn.functional as F

class Flatten(nn.Module):
    def __init__(self):
        super().__init__()
        
    def forward(self,x):
        return x.view(x.data.size(0),-1)
    
    
    
#Depthwise separable conv for Hard Net
class CombConvLayer(nn.Sequential):
    def __init__(self, in_channels, out_channels,kernel=1, stride=1, dropout=0.1, bias=False):
        super().__init__()
        self.add_module('layer1', ConvLayer(in_channels,out_channels, kernel))
        self.add_module('layer2',DWConvLayer(out_channels,out_channels, stride = stride))
        
    def forward(self, x):
        return super().forward(x)
    
    
class DWConvLayer(nn.Sequential):
    def __init__(self, in_channels, out_channels, stride=1, bias=False):
        super().__init__()
        out_ch = out_channels
        
        groups = in_channels
        kernel =3
        self.add_module('dwconv', nn.Conv2d(groups, groups,kernel_size=3,
                                            stride = stride, padding=1, groups=groups, bias=bias))
        
        self.add_module('norm', nn.BatchNorm2d(groups))
        
    def forward(self, x):
        return super().forward()

#conv->norm->relu6
class ConvLayer(nn.Sequential):
    def __init__(self, in_channels, out_channels, kernel=3, stride=1, dropout=0.1, bias=False):
        super().__init__()
        out_ch = out_channels
        groups = 1
        #print(kernel, 'x', kernel, 'x', in_channels, 'x', out_channels)
        self.add_module('conv', nn.Conv2d(in_channels, out_ch, kernel_size=kernel,          
                                          stride=stride, padding=kernel//2, groups=groups, bias=bias))
        self.add_module('norm', nn.BatchNorm2d(out_ch))
        self.add_module('relu', nn.ReLU6(True))                                          
    def forward(self, x):
        return super().forward(x)