/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class VariableKind extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			public static readonly GRAPH: VariableKind;
			public static readonly IMAGE: VariableKind;
			public static readonly TEXTUAL: VariableKind;
			public static readonly Unknown: VariableKind;
			public static readonly VISIBILITY: VariableKind;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}