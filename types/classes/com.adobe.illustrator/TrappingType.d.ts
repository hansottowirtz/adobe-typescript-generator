/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class TrappingType extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** Ignore opaque trapping type. */
			public static readonly IGNOREOPAQUE: TrappingType;
			/** Normal trapping type. */
			public static readonly NORMALTRAPPING: TrappingType;
			/** Opaque trapping type. */
			public static readonly OPAQUE: TrappingType;
			/** Transparent trapping type. */
			public static readonly TRANSPARENT: TrappingType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}