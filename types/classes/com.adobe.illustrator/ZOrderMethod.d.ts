/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ZOrderMethod extends IllustratorEnumBase {
			/** Move art one step forward in it's group or layer. */
			public static readonly BRINGFORWARD: ZOrderMethod;
			/** Move art to front of it's group or layer. */
			public static readonly BRINGTOFRONT: ZOrderMethod;
			public static readonly enumCache: CSEnumSharedCache;
			/** Move art one step backwards in it's group or layer. */
			public static readonly SENDBACKWARD: ZOrderMethod;
			/** Move art to back of it's group or layer. */
			public static readonly SENDTOBACK: ZOrderMethod;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}