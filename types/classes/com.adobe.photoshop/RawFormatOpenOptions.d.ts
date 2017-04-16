/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to opening a raw format document */
		class RawFormatOpenOptions extends Adobe.Photoshop.OpenOptions {
			/**
			 * number of bits for each channel (8 or 16)
			 * @type {number}
			 */
			public bitsPerChannel: number;
			/**
			 * only relevant for images with 16 bits per channel
			 * @type {Adobe.Photoshop.ByteOrder}
			 */
			public byteOrder: Adobe.Photoshop.ByteOrder;
			/**
			 * number of channels in image
			 * @type {number}
			 */
			public channelNumber: number;
			/**
			 * @type {number}
			 */
			public headerSize: number;
			/**
			 * height of image (in pixels)
			 * @type {number}
			 */
			public height: number;
			/**
			 * are the channels in the image interleaved?
			 * @type {boolean}
			 */
			public interleaveChannels: boolean;
			/**
			 * retain header when saving?
			 * @type {boolean}
			 */
			public retainHeader: boolean;
			/**
			 * width of image (in pixels)
			 * @type {number}
			 */
			public width: number;
		}
	}
}