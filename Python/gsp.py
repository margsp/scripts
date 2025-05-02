#!/usr/bin/env python
# -*- coding: utf-8 -*-
#  gsp.py
#  
# Wrapper for PyAutoGUI so that it's easier to use the click method
# simply pass file name of a screenshot to click it (it will be found in a predefined path)

import pyautogui, time, os

def click(filename, button = 'left'):
	path = "C:\\path\\to\\screenshots\\" + filename + ".PNG"
	processing = True
	while processing:
		time.sleep(0.1)
		try:
			coords = pyautogui.locateOnScreen(path, confidence = 0.8)
			if coords != None:
				center = pyautogui.center(coords)
				x, y = center
				pyautogui.click(x = x, y = y)
				processing = False
		except:
			continue
