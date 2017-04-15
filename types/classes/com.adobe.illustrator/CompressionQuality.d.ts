/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class CompressionQuality extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Automatic JPEG2000 compression high. */
			public static readonly AUTOMATICJPEG2000HIGH: Adobe.Illustrator.CompressionQuality;
			/** Automatic JPEG2000 compression lossless. */
			public static readonly AUTOMATICJPEG2000LOSSLESS: Adobe.Illustrator.CompressionQuality;
			/** Automatic JPEG2000 compression low. */
			public static readonly AUTOMATICJPEG2000LOW: Adobe.Illustrator.CompressionQuality;
			/** Automatic JPEG2000 compression maximum. */
			public static readonly AUTOMATICJPEG2000MAXIMUM: Adobe.Illustrator.CompressionQuality;
			/** Automatic JPEG2000 compression medium. */
			public static readonly AUTOMATICJPEG2000MEDIUM: Adobe.Illustrator.CompressionQuality;
			/** Automatic JPEG2000 compression minimum. */
			public static readonly AUTOMATICJPEG2000MINIMUM: Adobe.Illustrator.CompressionQuality;
			/** Automatic JPEG compression high. */
			public static readonly AUTOMATICJPEGHIGH: Adobe.Illustrator.CompressionQuality;
			/** Automatic JPEG compression low. */
			public static readonly AUTOMATICJPEGLOW: Adobe.Illustrator.CompressionQuality;
			/** Automatic JPEG compression maximum. */
			public static readonly AUTOMATICJPEGMAXIMUM: Adobe.Illustrator.CompressionQuality;
			/** Automatic JPEG compression medium. */
			public static readonly AUTOMATICJPEGMEDIUM: Adobe.Illustrator.CompressionQuality;
			/**
			 * Automatically choose between JPEG and ZIP performing minimum 
			 * compression depending on images.
			 */
			public static readonly AUTOMATICJPEGMINIMUM: Adobe.Illustrator.CompressionQuality;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly JPEG2000HIGH: Adobe.Illustrator.CompressionQuality;
			public static readonly JPEG2000LOSSLESS: Adobe.Illustrator.CompressionQuality;
			public static readonly JPEG2000LOW: Adobe.Illustrator.CompressionQuality;
			public static readonly JPEG2000MAXIMUM: Adobe.Illustrator.CompressionQuality;
			public static readonly JPEG2000MEDIUM: Adobe.Illustrator.CompressionQuality;
			public static readonly JPEG2000MINIMUM: Adobe.Illustrator.CompressionQuality;
			public static readonly JPEGHIGH: Adobe.Illustrator.CompressionQuality;
			public static readonly JPEGLOW: Adobe.Illustrator.CompressionQuality;
			public static readonly JPEGMAXIMUM: Adobe.Illustrator.CompressionQuality;
			public static readonly JPEGMEDIUM: Adobe.Illustrator.CompressionQuality;
			public static readonly JPEGMINIMUM: Adobe.Illustrator.CompressionQuality;
			/** Automatic compression. */
			public static readonly None: Adobe.Illustrator.CompressionQuality;
			public static readonly ZIP4BIT: Adobe.Illustrator.CompressionQuality;
			public static readonly ZIP8BIT: Adobe.Illustrator.CompressionQuality;
			/** Constructor */
			public constructor();
		}
	}
}