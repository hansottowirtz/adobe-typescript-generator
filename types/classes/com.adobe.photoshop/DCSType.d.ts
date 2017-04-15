/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class DCSType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Creates a color composite file in addition to DCS files. */
			public static readonly COLORCOMPOSITE: Adobe.Photoshop.DCSType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Creates a grayscale composite file in addition to DCS files.
			 */
			public static readonly GRAYSCALECOMPOSITE: Adobe.Photoshop.DCSType;
			/** Does not create a composite file. */
			public static readonly NOCOMPOSITE: Adobe.Photoshop.DCSType;
			/** Constructor */
			public constructor();
		}
	}
}