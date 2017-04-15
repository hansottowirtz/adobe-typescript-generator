/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The stroke cap. */
		class StrokeCap extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Butted cap. */
			public static readonly BUTTENDCAP: Adobe.Illustrator.StrokeCap;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Projecting cap. */
			public static readonly PROJECTINGENDCAP: Adobe.Illustrator.StrokeCap;
			/** Rounded cap. */
			public static readonly ROUNDENDCAP: Adobe.Illustrator.StrokeCap;
			/** Constructor */
			public constructor();
		}
	}
}