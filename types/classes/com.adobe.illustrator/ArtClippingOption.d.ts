/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ArtClippingOption extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** Output size is the size of the artboard. */
			public static readonly OUTPUTARTBOARDBOUNDS: ArtClippingOption;
			/** Output size is the size of the artwork. */
			public static readonly OUTPUTARTBOUNDS: ArtClippingOption;
			/** Output size is the size of the crop area. */
			public static readonly OUTPUTCROPRECTBOUNDS: ArtClippingOption;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}