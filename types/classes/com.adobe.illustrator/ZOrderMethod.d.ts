/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** How to re-arrange the art item. */
		class ZOrderMethod extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Move art one step forward in it's group or layer. */
			public static readonly BRINGFORWARD: Adobe.Illustrator.ZOrderMethod;
			/** Move art to front of it's group or layer. */
			public static readonly BRINGTOFRONT: Adobe.Illustrator.ZOrderMethod;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Move art one step backwards in it's group or layer. */
			public static readonly SENDBACKWARD: Adobe.Illustrator.ZOrderMethod;
			/** Move art to back of it's group or layer. */
			public static readonly SENDTOBACK: Adobe.Illustrator.ZOrderMethod;
			/** Constructor */
			public constructor();
		}
	}
}