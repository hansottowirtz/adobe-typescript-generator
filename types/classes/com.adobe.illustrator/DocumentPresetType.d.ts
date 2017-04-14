/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class DocumentPresetType extends IllustratorEnumBase {
			/** The default CMYK document preset. */
			public static readonly BasicCMYK: DocumentPresetType;
			/** The default RGB document preset. */
			public static readonly BasicRGB: DocumentPresetType;
			public static readonly enumCache: CSEnumSharedCache;
			/** The default Mobile document preset. */
			public static readonly Mobile: DocumentPresetType;
			/** The default Print document preset. */
			public static readonly Print: DocumentPresetType;
			/** The default Video and Film document preset. */
			public static readonly Video: DocumentPresetType;
			/** The default Web document preset. */
			public static readonly Web: DocumentPresetType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}