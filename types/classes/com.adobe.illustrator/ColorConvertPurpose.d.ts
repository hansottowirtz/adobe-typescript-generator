/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ColorConvertPurpose extends IllustratorEnumBase {
			/** Do standard conversion, without black preservation. */
			public static readonly defaultpurpose: ColorConvertPurpose;
			/** Dummy option. */
			public static readonly dummypurpose: ColorConvertPurpose;
			public static readonly enumCache: CSEnumSharedCache;
			/**
			 * Conversion options appropriate to creating an image for 
			 * print or export.
			 */
			public static readonly exportpurpose: ColorConvertPurpose;
			/**
			 * Conversion options appropriate to creating an image for 
			 * screen display.
			 */
			public static readonly previewpurpose: ColorConvertPurpose;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}