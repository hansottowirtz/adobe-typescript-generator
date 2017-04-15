/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class LiveDrawingOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for DELAYED. Use live screen drawing during mouse 
			 * operations after a delay if user pauses before the mouse 
			 * moves.
			 */
			public static readonly delayed: Adobe.Indesign.LiveDrawingOptions;
			/**
			 * Use live screen drawing during mouse operations after a 
			 * delay if user pauses before the mouse moves.
			 */
			public static readonly DELAYED: Adobe.Indesign.LiveDrawingOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for IMMEDIATELY. Use live screen drawing during mouse 
			 * operations.
			 */
			public static readonly immediately: Adobe.Indesign.LiveDrawingOptions;
			/** Use live screen drawing during mouse operations. */
			public static readonly IMMEDIATELY: Adobe.Indesign.LiveDrawingOptions;
			/**
			 * Alias for NEVER. Never use live screen drawing during mouse 
			 * operations, use sprite mode.
			 */
			public static readonly never: Adobe.Indesign.LiveDrawingOptions;
			/**
			 * Never use live screen drawing during mouse operations, use 
			 * sprite mode.
			 */
			public static readonly NEVER: Adobe.Indesign.LiveDrawingOptions;
			/** Constructor */
			public constructor();
		}
	}
}