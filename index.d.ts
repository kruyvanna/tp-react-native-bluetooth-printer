declare module 'tp-react-native-bluetooth-printer' {
  export interface BluetoothManagerStatic {
    EVENT_DEVICE_ALREADY_PAIRED: string;
    EVENT_DEVICE_DISCOVER_DONE: string;
    EVENT_DEVICE_FOUND: string;
    EVENT_CONNECTION_LOST: string;
    EVENT_UNABLE_CONNECT: string;
    EVENT_CONNECTED: string;
    EVENT_BLUETOOTH_NOT_SUPPORT: string;

    isBluetoothEnabled(): Promise<boolean>;
    enableBluetooth(): Promise<string[]>;
    disableBluetooth(): Promise<void>;
    scanDevices(): Promise<string>;
    stopScanning(): Promise<void>;
    connect(address: string): Promise<void>;
  }

  export interface BluetoothTscPrinterStatic {
    DIRECTION: {
      FORWARD: number;
      BACKWARD: number;
    };
    DENSITY: {
      DNESITY0: number;
      DNESITY1: number;
      DNESITY2: number;
      DNESITY3: number;
      DNESITY4: number;
      DNESITY5: number;
      DNESITY6: number;
      DNESITY7: number;
      DNESITY8: number;
      DNESITY9: number;
      DNESITY10: number;
      DNESITY11: number;
      DNESITY12: number;
      DNESITY13: number;
      DNESITY14: number;
      DNESITY15: number;
    };
    BARCODETYPE: {
      CODE128: string;
      CODE128M: string;
      EAN128: string;
      ITF25: string;
      ITF25C: string;
      CODE39: string;
      CODE39C: string;
      CODE39S: string;
      CODE93: string;
      EAN13: string;
      EAN13_2: string;
      EAN13_5: string;
      EAN8: string;
      EAN8_2: string;
      EAN8_5: string;
      CODABAR: string;
      POST: string;
      UPCA: string;
      UPCA_2: string;
      UPCA_5: string;
      UPCE: string;
      UPCE_2: string;
      UPCE_5: string;
      CPOST: string;
      MSI: string;
      MSIC: string;
      PLESSEY: string;
      ITF14: string;
      EAN14: string;
    };
    FONTTYPE: {
      FONT_1: string;
      FONT_2: string;
      FONT_3: string;
      FONT_4: string;
      FONT_5: string;
      FONT_6: string;
      FONT_7: string;
      FONT_8: string;
      SIMPLIFIED_CHINESE: string;
      TRADITIONAL_CHINESE: string;
      KOREAN: string;
    };
    EEC: {
      LEVEL_L: string;
      LEVEL_M: string;
      LEVEL_Q: string;
      LEVEL_H: string;
    };
    ROTATION: {
      ROTATION_0: number;
      ROTATION_90: number;
      ROTATION_180: number;
      ROTATION_270: number;
    };
    FONTMUL: {
      MUL_1: number;
      MUL_2: number;
      MUL_3: number;
      MUL_4: number;
      MUL_5: number;
      MUL_6: number;
      MUL_7: number;
      MUL_8: number;
      MUL_9: number;
      MUL_10: number;
    };
    BITMAP_MODE: {
      OVERWRITE: number;
      OR: number;
      XOR: number;
    };
    PRINT_SPEED: {
      SPEED1DIV5: number;
      SPEED2: number;
      SPEED3: number;
      SPEED4: number;
    };
    TEAR: {
      ON: string;
      OFF: string;
    };
    READABLE: {
      DISABLE: number;
      EANBLE: number;
    };

    printLabel(options: TscPrinterOptions): Promise<void>;
  }

  export interface BluetoothEscposPrinterStatic {
    ERROR_CORRECTION: {
      L: number;
      M: number;
      Q: number;
      H: number;
    };
    BARCODETYPE: {
      UPC_A: number;
      UPC_E: number;
      JAN13: number;
      JAN8: number;
      CODE39: number;
      ITF: number;
      CODABAR: number;
      CODE93: number;
      CODE128: number;
    };
    ROTATION: {
      OFF: number;
      ON: number;
    };
    ALIGN: {
      LEFT: number;
      CENTER: number;
      RIGHT: number;
    };

    printerInit(): Promise<void>;
    printAndFeed(feed: number): Promise<void>;
    printerLeftSpace(space: number): Promise<void>;
    printerLineSpace(space: number): Promise<void>;
    printerUnderLine(line: number): Promise<void>;
    printerAlign(align: number): Promise<void>;
    printText(text: string, options?: PrintTextOptions): Promise<void>;
    printColumn(
      columnWidths: number[],
      columnAligns: number[],
      columnTexts: string[],
      options?: PrintTextOptions
    ): Promise<void>;
    setWidth(width: number): Promise<void>;
    printPic(base64Str: string, options?: PrintPicOptions): Promise<void>;
    rotate(): Promise<void>;
    setBlob(weight: number): Promise<void>;
    printQRCode(
      content: string,
      size: number,
      correctionLevel: number,
      leftPadding: number
    ): Promise<void>;
    printBarCode(
      str: string,
      nType: number,
      nWidthX: number,
      nHeight: number,
      nHriFontType: number,
      nHriFontPosition: number
    ): Promise<void>;
  }

  // Types for options objects
  export interface PrintTextOptions {
    encoding?: string;
    codepage?: number;
    widthtimes?: number;
    heigthtimes?: number;
    fonttype?: number;
  }

  export interface PrintPicOptions {
    width?: number;
    left?: number;
  }

  export interface TscPrinterOptions {
    width: number;
    height: number;
    gap?: number;
    direction?: number;
    reference?: [number, number];
    tear?: string;
    sound?: number;
    text?: Array<{
      text: string;
      x: number;
      y: number;
      fonttype?: string;
      rotation?: number;
      xscal?: number;
      yscal?: number;
    }>;
    qrcode?: Array<{
      code: string;
      x: number;
      y: number;
      level?: string;
      width?: number;
      rotation?: number;
    }>;
    barcode?: Array<{
      x: number;
      y: number;
      type: string;
      height: number;
      readable?: number;
      rotation?: number;
      code: string;
      wide?: number;
      narrow?: number;
    }>;
    image?: Array<{
      x: number;
      y: number;
      mode: number;
      width: number;
      image: string;
    }>;
  }

  export const BluetoothManager: BluetoothManagerStatic;
  export const BluetoothEscposPrinter: BluetoothEscposPrinterStatic;
  export const BluetoothTscPrinter: BluetoothTscPrinterStatic;
}
