/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PrintColorProfile extends IllustratorEnumBase {
			/** Use custom color profile. */
			public static readonly CUSTOMPROFILE: PrintColorProfile;
			public static readonly enumCache: CSEnumSharedCache;
			/** Use old style AI color profile. */
			public static readonly OLDSTYLEPROFILE: PrintColorProfile;
			/** Same as printer color profile. */
			public static readonly PRINTERPROFILE: PrintColorProfile;
			/** Same as source color profile. */
			public static readonly SOURCEPROFILE: PrintColorProfile;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}