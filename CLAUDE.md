# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React Native library for Bluetooth ESC/POS and TSC printer support, forked from react-native-bluetooth-escpos-printer with TypeScript support and improvements. The library provides native modules for both Android and iOS platforms.

## Commands

### Development Setup
- **Install dependencies:** `npm install` or `yarn install`
- **iOS setup:** `cd ios && pod install`
- **No test commands available** - The project lacks a testing framework

### Building and Running
This is a React Native library, not a standalone app. To test functionality:
1. Link it to a React Native project
2. Import modules: `import {BluetoothManager, BluetoothEscposPrinter, BluetoothTscPrinter} from 'tp-react-native-bluetooth-printer'`

## Architecture

### Module Structure
The library exports three main modules:

1. **BluetoothManager** - Device discovery, pairing, and connection management
   - Platform implementations: `ios/RNBluetoothManager.m` and `android/.../RNBluetoothManagerModule.java`
   
2. **BluetoothEscposPrinter** - ESC/POS receipt printer functionality  
   - Platform implementations: `ios/RNBluetoothEscposPrinter.m` and `android/.../RNBluetoothEscposPrinterModule.java`
   
3. **BluetoothTscPrinter** - TSC label printer functionality
   - Platform implementations: `ios/RNBluetoothTscPrinter.m` and `android/.../RNBluetoothTscPrinterModule.java`

### Key Files
- `index.js` - JavaScript API that exports the native modules
- `index.d.ts` - TypeScript definitions for all modules and their methods
- `RNBluetoothEscposPrinter.podspec` - iOS CocoaPods configuration

### Platform-Specific Implementation
- **Android:** Java implementation in `/android/src/main/java/cn/jystudio/bluetooth/`
  - Uses Android's BluetoothAdapter and BluetoothSocket
  - Implements ESC/POS and TSC command protocols
  - QR code generation via Google ZXing

- **iOS:** Objective-C implementation in `/ios/`
  - Uses CoreBluetooth framework
  - QR code generation via ZXingObjC (loaded via CocoaPods)
  - Implements same ESC/POS and TSC protocols as Android

### Native Module Bridge
Each module follows React Native's native module pattern:
- Methods return Promises to JavaScript
- Events are emitted for device discovery
- Platform-specific features are handled internally (e.g., Bluetooth enable is Android-only)

## Development Notes

- The library requires React Native >=0.55.4
- TypeScript support is provided through declaration files
- No linting or formatting rules are configured
- When modifying native code, remember to rebuild the respective platform
- For iOS changes, run `cd ios && pod install` after modifications