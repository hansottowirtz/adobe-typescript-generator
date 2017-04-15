/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The color profile type. */
		class PrintColorProfile extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Use custom color profile. */
			public static readonly CUSTOMPROFILE: Adobe.Illustrator.PrintColorProfile;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Use old style AI color profile. */
			public static readonly OLDSTYLEPROFILE: Adobe.Illustrator.PrintColorProfile;
			/** Same as printer color profile. */
			public static readonly PRINTERPROFILE: Adobe.Illustrator.PrintColorProfile;
			/** Same as source color profile. */
			public static readonly SOURCEPROFILE: Adobe.Illustrator.PrintColorProfile;
			/** Constructor */
			public constructor();
		}
	}
}