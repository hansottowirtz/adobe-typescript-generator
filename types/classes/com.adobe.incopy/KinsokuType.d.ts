/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class KinsokuType extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The kinsoku prioritize adjustment amount. */
			public static readonly KINSOKU_PRIORITIZE_ADJUSTMENT_AMOUNT: Adobe.Incopy.KinsokuType;
			/**
			 * Attempts to move characters to the previous line; if the 
			 * push-in is not possible, pushes characters to the next line.
			 */
			public static readonly KINSOKU_PUSH_IN_FIRST: Adobe.Incopy.KinsokuType;
			/**
			 * Attempts to move characters to the next line; if the 
			 * push-out is not possible, pushes characters to the previous 
			 * line.
			 */
			public static readonly KINSOKU_PUSH_OUT_FIRST: Adobe.Incopy.KinsokuType;
			/**
			 * Always moves characters to the next line. Does not attempt a 
			 * push-in.
			 */
			public static readonly KINSOKU_PUSH_OUT_ONLY: Adobe.Incopy.KinsokuType;
			/**
			 * Alias for KINSOKU_PRIORITIZE_ADJUSTMENT_AMOUNT. The kinsoku 
			 * prioritize adjustment amount.
			 */
			public static readonly kinsokuPrioritizeAdjustmentAmount: Adobe.Incopy.KinsokuType;
			/**
			 * Alias for KINSOKU_PUSH_IN_FIRST. Attempts to move characters 
			 * to the previous line; if the push-in is not possible, pushes 
			 * characters to the next line.
			 */
			public static readonly kinsokuPushInFirst: Adobe.Incopy.KinsokuType;
			/**
			 * Alias for KINSOKU_PUSH_OUT_FIRST. Attempts to move 
			 * characters to the next line; if the push-out is not 
			 * possible, pushes characters to the previous line.
			 */
			public static readonly kinsokuPushOutFirst: Adobe.Incopy.KinsokuType;
			/**
			 * Alias for KINSOKU_PUSH_OUT_ONLY. Always moves characters to 
			 * the next line. Does not attempt a push-in.
			 */
			public static readonly kinsokuPushOutOnly: Adobe.Incopy.KinsokuType;
			/** Constructor */
			public constructor();
		}
	}
}