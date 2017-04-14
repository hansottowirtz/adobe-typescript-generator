/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class KnockoutState extends IllustratorEnumBase {
			/** Knockout off. */
			public static readonly DISABLED: KnockoutState;
			/** Knockout off. */
			public static readonly ENABLED: KnockoutState;
			public static readonly enumCache: CSEnumSharedCache;
			/** Knockout state inherited from group? */
			public static readonly INHERITED: KnockoutState;
			/** Unknown/uninitialized knockout state. */
			public static readonly Unknown: KnockoutState;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}