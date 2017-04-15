/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class JoinOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for COMBINE. Combine two end points and replace with 
			 * an single averaged point.
			 */
			public static readonly combine: Adobe.Indesign.JoinOptions;
			/**
			 * Combine two end points and replace with an single averaged 
			 * point.
			 */
			public static readonly COMBINE: Adobe.Indesign.JoinOptions;
			/** Alias for CONNECT. Connect two end points (default). */
			public static readonly connect: Adobe.Indesign.JoinOptions;
			/** Connect two end points (default). */
			public static readonly CONNECT: Adobe.Indesign.JoinOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}