/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class WariChuJustificationType extends IllustratorEnumBase {
			public static readonly Center: WariChuJustificationType;
			public static readonly enumCache: CSEnumSharedCache;
			public static readonly Left: WariChuJustificationType;
			public static readonly Right: WariChuJustificationType;
			public static readonly WARICHUAUTOJUSTIFY: WariChuJustificationType;
			public static readonly WARICHUFULLJUSTIFY: WariChuJustificationType;
			public static readonly WARICHUFULLJUSTIFYLASTLINECENTER: WariChuJustificationType;
			public static readonly WARICHUFULLJUSTIFYLASTLINELEFT: WariChuJustificationType;
			public static readonly WARICHUFULLJUSTIFYLASTLINERIGHT: WariChuJustificationType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}