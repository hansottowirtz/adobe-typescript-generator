/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class Justification extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly CENTER: Adobe.Illustrator.Justification;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly FULLJUSTIFY: Adobe.Illustrator.Justification;
			public static readonly FULLJUSTIFYLASTLINECENTER: Adobe.Illustrator.Justification;
			public static readonly FULLJUSTIFYLASTLINELEFT: Adobe.Illustrator.Justification;
			public static readonly FULLJUSTIFYLASTLINERIGHT: Adobe.Illustrator.Justification;
			public static readonly LEFT: Adobe.Illustrator.Justification;
			public static readonly RIGHT: Adobe.Illustrator.Justification;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}