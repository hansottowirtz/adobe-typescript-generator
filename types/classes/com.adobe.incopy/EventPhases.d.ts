/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class EventPhases extends Adobe.Csawlib.CSEnumBase {
			/**
			 * The at-target phase of propagation.
			 * @type {Adobe.Incopy.EventPhases}
			 * @readonly
			 */
			public static readonly AT_TARGET: Adobe.Incopy.EventPhases;
			/**
			 * Alias for AT_TARGET. The at-target phase of propagation.
			 * @type {Adobe.Incopy.EventPhases}
			 * @readonly
			 */
			public static readonly atTarget: Adobe.Incopy.EventPhases;
			/**
			 * The bubbling phase of propagation.
			 * @type {Adobe.Incopy.EventPhases}
			 * @readonly
			 */
			public static readonly BUBBLING_PHASE: Adobe.Incopy.EventPhases;
			/**
			 * Alias for BUBBLING_PHASE. The bubbling phase of propagation.
			 * @type {Adobe.Incopy.EventPhases}
			 * @readonly
			 */
			public static readonly bubblingPhase: Adobe.Incopy.EventPhases;
			/**
			 * Alias for DONE. The propagation is complete.
			 * @type {Adobe.Incopy.EventPhases}
			 * @readonly
			 */
			public static readonly done: Adobe.Incopy.EventPhases;
			/**
			 * The propagation is complete.
			 * @type {Adobe.Incopy.EventPhases}
			 * @readonly
			 */
			public static readonly DONE: Adobe.Incopy.EventPhases;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Not yet propagating.
			 * @type {Adobe.Incopy.EventPhases}
			 * @readonly
			 */
			public static readonly NOT_DISPATCHING: Adobe.Incopy.EventPhases;
			/**
			 * Alias for NOT_DISPATCHING. Not yet propagating.
			 * @type {Adobe.Incopy.EventPhases}
			 * @readonly
			 */
			public static readonly notDispatching: Adobe.Incopy.EventPhases;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}