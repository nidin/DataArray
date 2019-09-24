import { ZLIB } from "../zlib/ZLIB";
/**
 * @author Nidin Vinayakan | nidinthb@gmail.com
 */
export class ZLIBHelper {
  static decoder: ZLIB = new ZLIB();
  static decoderAsync: Worker | null;
  static callback: Function | null;
  static ENCODE: number = 1;
  static DECODE: number = 2;
  private static workerScript =
    "../modules/xdata/workers/zlib-worker-bootstrap.js";

  static init(workerScript?: string): void {
    if (workerScript) {
      ZLIBHelper.workerScript = workerScript;
    }
    if (ZLIBHelper.decoderAsync) {
      ZLIBHelper.decoderAsync.terminate();
      ZLIBHelper.decoderAsync = null;
    }
    ZLIBHelper.decoderAsync = new Worker(ZLIBHelper.workerScript);
    ZLIBHelper.decoderAsync.onmessage = function(e) {
      const receivedData: any = e.data;

      if (receivedData.command === ZLIBHelper.ENCODE) {
        // encode not implemented
      } else if (receivedData.command === ZLIBHelper.DECODE) {
        if (ZLIBHelper.callback) ZLIBHelper.callback(receivedData.result);
        ZLIBHelper.callback = null;
      }
    };
  }

  /**
   * TODO : Implement encoder
   * @param data
   * @returns {null}
   */
  // @ts-ignore
  static encodeBuffer(data: ArrayBuffer): ArrayBuffer {
    throw "ZLIB encoder not implemented!";
  }

  // @ts-ignore
  static encode(data: Uint8Array): Uint8Array {
    throw "ZLIB encoder not implemented!";
  }

  static decodeBuffer(data: ArrayBuffer): ArrayBuffer {
    return ZLIBHelper.decoder.decode(new Uint8Array(data)).buffer;
  }

  static decode(data: Uint8Array): Uint8Array {
    return ZLIBHelper.decoder.decode(data);
  }

  /**
   * TODO : Implement encoder
   * @param data
   * @param _callback
   */
  // @ts-ignore
  static encodeBufferAsync(data: ArrayBuffer, _callback: Function): void {
    throw "ZLIB encoder not implemented!";
  }

  static decodeBufferAsync(data: ArrayBuffer, _callback: Function): void {
    if (ZLIBHelper.callback === null) {
      ZLIBHelper.callback = _callback;
      if (ZLIBHelper.decoderAsync) {
        ZLIBHelper.decoderAsync.postMessage(
          { data, command: ZLIBHelper.DECODE },
          [data]
        );
      }
    } else {
      console.log("Warning! Another ZLIB decoding is running...");
    }
  }
}
