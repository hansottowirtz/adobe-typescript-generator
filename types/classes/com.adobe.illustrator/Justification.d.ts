/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class Justification extends IllustratorEnumBase {
			public static readonly CENTER: Justification;
			public static readonly enumCache: CSEnumSharedCache;
			public static readonly FULLJUSTIFY: Justification;
			public static readonly FULLJUSTIFYLASTLINECENTER: Justification;
			public static readonly FULLJUSTIFYLASTLINELEFT: Justification;
			public static readonly FULLJUSTIFYLASTLINERIGHT: Justification;
			public static readonly LEFT: Justification;
			public static readonly RIGHT: Justification;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}