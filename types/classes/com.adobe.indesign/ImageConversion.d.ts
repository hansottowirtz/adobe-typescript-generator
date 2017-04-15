/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ImageConversion extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for AUTOMATIC. Uses the best format based on the 
			 * image.
			 */
			public static readonly automatic: Adobe.Indesign.ImageConversion;
			/** Uses the best format based on the image. */
			public static readonly AUTOMATIC: Adobe.Indesign.ImageConversion;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for GIF. Uses GIF format for all images. */
			public static readonly gif: Adobe.Indesign.ImageConversion;
			/** Uses GIF format for all images. */
			public static readonly GIF: Adobe.Indesign.ImageConversion;
			/** Alias for JPEG. Uses JPEG format for all images. */
			public static readonly jpeg: Adobe.Indesign.ImageConversion;
			/** Uses JPEG format for all images. */
			public static readonly JPEG: Adobe.Indesign.ImageConversion;
			/** Constructor */
			public constructor();
		}
	}
}