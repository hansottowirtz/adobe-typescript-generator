/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class StrokeCap extends IllustratorEnumBase {
			/** Butted cap. */
			public static readonly BUTTENDCAP: StrokeCap;
			public static readonly enumCache: CSEnumSharedCache;
			/** Projecting cap. */
			public static readonly PROJECTINGENDCAP: StrokeCap;
			/** Rounded cap. */
			public static readonly ROUNDENDCAP: StrokeCap;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}