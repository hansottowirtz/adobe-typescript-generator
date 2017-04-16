/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class LiveDrawingOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for DELAYED. Use live screen drawing during mouse 
			 * operations after a delay if user pauses before the mouse 
			 * moves.
			 * @type {Adobe.Incopy.LiveDrawingOptions}
			 * @readonly
			 */
			public static readonly delayed: Adobe.Incopy.LiveDrawingOptions;
			/**
			 * Use live screen drawing during mouse operations after a 
			 * delay if user pauses before the mouse moves.
			 * @type {Adobe.Incopy.LiveDrawingOptions}
			 * @readonly
			 */
			public static readonly DELAYED: Adobe.Incopy.LiveDrawingOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for IMMEDIATELY. Use live screen drawing during mouse 
			 * operations.
			 * @type {Adobe.Incopy.LiveDrawingOptions}
			 * @readonly
			 */
			public static readonly immediately: Adobe.Incopy.LiveDrawingOptions;
			/**
			 * Use live screen drawing during mouse operations.
			 * @type {Adobe.Incopy.LiveDrawingOptions}
			 * @readonly
			 */
			public static readonly IMMEDIATELY: Adobe.Incopy.LiveDrawingOptions;
			/**
			 * Alias for NEVER. Never use live screen drawing during mouse 
			 * operations, use sprite mode.
			 * @type {Adobe.Incopy.LiveDrawingOptions}
			 * @readonly
			 */
			public static readonly never: Adobe.Incopy.LiveDrawingOptions;
			/**
			 * Never use live screen drawing during mouse operations, use 
			 * sprite mode.
			 * @type {Adobe.Incopy.LiveDrawingOptions}
			 * @readonly
			 */
			public static readonly NEVER: Adobe.Incopy.LiveDrawingOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}