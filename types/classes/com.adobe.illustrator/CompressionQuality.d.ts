/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class CompressionQuality extends IllustratorEnumBase {
			/** Automatic JPEG2000 compression high. */
			public static readonly AUTOMATICJPEG2000HIGH: CompressionQuality;
			/** Automatic JPEG2000 compression lossless. */
			public static readonly AUTOMATICJPEG2000LOSSLESS: CompressionQuality;
			/** Automatic JPEG2000 compression low. */
			public static readonly AUTOMATICJPEG2000LOW: CompressionQuality;
			/** Automatic JPEG2000 compression maximum. */
			public static readonly AUTOMATICJPEG2000MAXIMUM: CompressionQuality;
			/** Automatic JPEG2000 compression medium. */
			public static readonly AUTOMATICJPEG2000MEDIUM: CompressionQuality;
			/** Automatic JPEG2000 compression minimum. */
			public static readonly AUTOMATICJPEG2000MINIMUM: CompressionQuality;
			/** Automatic JPEG compression high. */
			public static readonly AUTOMATICJPEGHIGH: CompressionQuality;
			/** Automatic JPEG compression low. */
			public static readonly AUTOMATICJPEGLOW: CompressionQuality;
			/** Automatic JPEG compression maximum. */
			public static readonly AUTOMATICJPEGMAXIMUM: CompressionQuality;
			/** Automatic JPEG compression medium. */
			public static readonly AUTOMATICJPEGMEDIUM: CompressionQuality;
			/**
			 * Automatically choose between JPEG and ZIP performing minimum 
			 * compression depending on images.
			 */
			public static readonly AUTOMATICJPEGMINIMUM: CompressionQuality;
			public static readonly enumCache: CSEnumSharedCache;
			public static readonly JPEG2000HIGH: CompressionQuality;
			public static readonly JPEG2000LOSSLESS: CompressionQuality;
			public static readonly JPEG2000LOW: CompressionQuality;
			public static readonly JPEG2000MAXIMUM: CompressionQuality;
			public static readonly JPEG2000MEDIUM: CompressionQuality;
			public static readonly JPEG2000MINIMUM: CompressionQuality;
			public static readonly JPEGHIGH: CompressionQuality;
			public static readonly JPEGLOW: CompressionQuality;
			public static readonly JPEGMAXIMUM: CompressionQuality;
			public static readonly JPEGMEDIUM: CompressionQuality;
			public static readonly JPEGMINIMUM: CompressionQuality;
			/** Automatic compression. */
			public static readonly None: CompressionQuality;
			public static readonly ZIP4BIT: CompressionQuality;
			public static readonly ZIP8BIT: CompressionQuality;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}