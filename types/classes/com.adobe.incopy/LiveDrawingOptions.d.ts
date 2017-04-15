/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class LiveDrawingOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for DELAYED. Use live screen drawing during mouse 
			 * operations after a delay if user pauses before the mouse 
			 * moves.
			 */
			public static readonly delayed: Adobe.Incopy.LiveDrawingOptions;
			/**
			 * Use live screen drawing during mouse operations after a 
			 * delay if user pauses before the mouse moves.
			 */
			public static readonly DELAYED: Adobe.Incopy.LiveDrawingOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for IMMEDIATELY. Use live screen drawing during mouse 
			 * operations.
			 */
			public static readonly immediately: Adobe.Incopy.LiveDrawingOptions;
			/** Use live screen drawing during mouse operations. */
			public static readonly IMMEDIATELY: Adobe.Incopy.LiveDrawingOptions;
			/**
			 * Alias for NEVER. Never use live screen drawing during mouse 
			 * operations, use sprite mode.
			 */
			public static readonly never: Adobe.Incopy.LiveDrawingOptions;
			/**
			 * Never use live screen drawing during mouse operations, use 
			 * sprite mode.
			 */
			public static readonly NEVER: Adobe.Incopy.LiveDrawingOptions;
			/** Constructor */
			public constructor();
		}
	}
}