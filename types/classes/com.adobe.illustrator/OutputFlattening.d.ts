/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class OutputFlattening extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			public static readonly PRESERVEAPPEARANCE: OutputFlattening;
			/** Discard transparency. */
			public static readonly PRESERVEPATHS: OutputFlattening;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}