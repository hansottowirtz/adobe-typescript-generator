/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class ArtClippingOption extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Output size is the size of the artboard. */
			public static readonly OUTPUTARTBOARDBOUNDS: Adobe.Illustrator.ArtClippingOption;
			/** Output size is the size of the artwork. */
			public static readonly OUTPUTARTBOUNDS: Adobe.Illustrator.ArtClippingOption;
			/** Output size is the size of the crop area. */
			public static readonly OUTPUTCROPRECTBOUNDS: Adobe.Illustrator.ArtClippingOption;
			/** Constructor */
			public constructor();
		}
	}
}