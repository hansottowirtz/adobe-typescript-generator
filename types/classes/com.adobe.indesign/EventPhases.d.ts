/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class EventPhases extends Adobe.Csawlib.CSEnumBase {
			/**
			 * The at-target phase of propagation.
			 * @type {Adobe.Indesign.EventPhases}
			 * @readonly
			 */
			public static readonly AT_TARGET: Adobe.Indesign.EventPhases;
			/**
			 * Alias for AT_TARGET. The at-target phase of propagation.
			 * @type {Adobe.Indesign.EventPhases}
			 * @readonly
			 */
			public static readonly atTarget: Adobe.Indesign.EventPhases;
			/**
			 * The bubbling phase of propagation.
			 * @type {Adobe.Indesign.EventPhases}
			 * @readonly
			 */
			public static readonly BUBBLING_PHASE: Adobe.Indesign.EventPhases;
			/**
			 * Alias for BUBBLING_PHASE. The bubbling phase of propagation.
			 * @type {Adobe.Indesign.EventPhases}
			 * @readonly
			 */
			public static readonly bubblingPhase: Adobe.Indesign.EventPhases;
			/**
			 * Alias for DONE. The propagation is complete.
			 * @type {Adobe.Indesign.EventPhases}
			 * @readonly
			 */
			public static readonly done: Adobe.Indesign.EventPhases;
			/**
			 * The propagation is complete.
			 * @type {Adobe.Indesign.EventPhases}
			 * @readonly
			 */
			public static readonly DONE: Adobe.Indesign.EventPhases;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Not yet propagating.
			 * @type {Adobe.Indesign.EventPhases}
			 * @readonly
			 */
			public static readonly NOT_DISPATCHING: Adobe.Indesign.EventPhases;
			/**
			 * Alias for NOT_DISPATCHING. Not yet propagating.
			 * @type {Adobe.Indesign.EventPhases}
			 * @readonly
			 */
			public static readonly notDispatching: Adobe.Indesign.EventPhases;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}