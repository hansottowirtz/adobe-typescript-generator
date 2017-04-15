/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SpreadFlattenerLevel extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for CUSTOM. Uses the specified custom flattening 
			 * level.
			 */
			public static readonly custom: Adobe.Indesign.SpreadFlattenerLevel;
			/** Uses the specified custom flattening level. */
			public static readonly CUSTOM: Adobe.Indesign.SpreadFlattenerLevel;
			/** Uses the default level. */
			public static readonly DEFAULT_VALUE: Adobe.Indesign.SpreadFlattenerLevel;
			/** Alias for DEFAULT_VALUE. Uses the default level. */
			public static readonly defaultValue: Adobe.Indesign.SpreadFlattenerLevel;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for NONE. Turns off flattening. */
			public static readonly none: Adobe.Indesign.SpreadFlattenerLevel;
			/** Turns off flattening. */
			public static readonly NONE: Adobe.Indesign.SpreadFlattenerLevel;
			/** Constructor */
			public constructor();
		}
	}
}