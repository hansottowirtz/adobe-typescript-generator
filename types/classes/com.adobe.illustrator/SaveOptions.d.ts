/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class SaveOptions extends IllustratorEnumBase {
			/** Do not save changes. */
			public static readonly DONOTSAVECHANGES: SaveOptions;
			public static readonly enumCache: CSEnumSharedCache;
			/** Ask the user whether to save. */
			public static readonly PROMPTTOSAVECHANGES: SaveOptions;
			/** Save changes. */
			public static readonly SAVECHANGES: SaveOptions;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}