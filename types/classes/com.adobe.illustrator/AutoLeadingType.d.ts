/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The auto leading type. */
		class AutoLeadingType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Roman leading type. */
			public static readonly BOTTOMTOBOTTOM: Adobe.Illustrator.AutoLeadingType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Japanese leading type. */
			public static readonly TOPTOTOP: Adobe.Illustrator.AutoLeadingType;
			/** Constructor */
			public constructor();
		}
	}
}