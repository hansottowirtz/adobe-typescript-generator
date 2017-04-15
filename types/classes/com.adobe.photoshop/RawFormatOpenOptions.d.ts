/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to opening a raw format document */
		class RawFormatOpenOptions extends Adobe.Photoshop.OpenOptions {
			/** number of bits for each channel (8 or 16) */
			public bitsPerChannel: number;
			/** only relevant for images with 16 bits per channel */
			public byteOrder: Adobe.Photoshop.ByteOrder;
			/** number of channels in image */
			public channelNumber: number;
			public headerSize: number;
			/** height of image (in pixels) */
			public height: number;
			/** are the channels in the image interleaved? */
			public interleaveChannels: boolean;
			/** retain header when saving? */
			public retainHeader: boolean;
			/** width of image (in pixels) */
			public width: number;
		}
	}
}