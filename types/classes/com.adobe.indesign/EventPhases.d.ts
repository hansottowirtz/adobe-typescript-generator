/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class EventPhases extends Adobe.Csawlib.CSEnumBase {
			/** The at-target phase of propagation. */
			public static readonly AT_TARGET: Adobe.Indesign.EventPhases;
			/** Alias for AT_TARGET. The at-target phase of propagation. */
			public static readonly atTarget: Adobe.Indesign.EventPhases;
			/** The bubbling phase of propagation. */
			public static readonly BUBBLING_PHASE: Adobe.Indesign.EventPhases;
			/**
			 * Alias for BUBBLING_PHASE. The bubbling phase of propagation.
			 */
			public static readonly bubblingPhase: Adobe.Indesign.EventPhases;
			/** Alias for DONE. The propagation is complete. */
			public static readonly done: Adobe.Indesign.EventPhases;
			/** The propagation is complete. */
			public static readonly DONE: Adobe.Indesign.EventPhases;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Not yet propagating. */
			public static readonly NOT_DISPATCHING: Adobe.Indesign.EventPhases;
			/** Alias for NOT_DISPATCHING. Not yet propagating. */
			public static readonly notDispatching: Adobe.Indesign.EventPhases;
			/** Constructor */
			public constructor();
		}
	}
}