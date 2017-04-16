/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TextWrapSideOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Both sides text wrap.
			 * @type {Adobe.Incopy.TextWrapSideOptions}
			 * @readonly
			 */
			public static readonly BOTH_SIDES: Adobe.Incopy.TextWrapSideOptions;
			/**
			 * Alias for BOTH_SIDES. Both sides text wrap.
			 * @type {Adobe.Incopy.TextWrapSideOptions}
			 * @readonly
			 */
			public static readonly bothSides: Adobe.Incopy.TextWrapSideOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Largest side text wrap.
			 * @type {Adobe.Incopy.TextWrapSideOptions}
			 * @readonly
			 */
			public static readonly LARGEST_AREA: Adobe.Incopy.TextWrapSideOptions;
			/**
			 * Alias for LARGEST_AREA. Largest side text wrap.
			 * @type {Adobe.Incopy.TextWrapSideOptions}
			 * @readonly
			 */
			public static readonly largestArea: Adobe.Incopy.TextWrapSideOptions;
			/**
			 * Left side text wrap.
			 * @type {Adobe.Incopy.TextWrapSideOptions}
			 * @readonly
			 */
			public static readonly LEFT_SIDE: Adobe.Incopy.TextWrapSideOptions;
			/**
			 * Alias for LEFT_SIDE. Left side text wrap.
			 * @type {Adobe.Incopy.TextWrapSideOptions}
			 * @readonly
			 */
			public static readonly leftSide: Adobe.Incopy.TextWrapSideOptions;
			/**
			 * Right side text wrap.
			 * @type {Adobe.Incopy.TextWrapSideOptions}
			 * @readonly
			 */
			public static readonly RIGHT_SIDE: Adobe.Incopy.TextWrapSideOptions;
			/**
			 * Alias for RIGHT_SIDE. Right side text wrap.
			 * @type {Adobe.Incopy.TextWrapSideOptions}
			 * @readonly
			 */
			public static readonly rightSide: Adobe.Incopy.TextWrapSideOptions;
			/**
			 * Away from binding side text wrap.
			 * @type {Adobe.Incopy.TextWrapSideOptions}
			 * @readonly
			 */
			public static readonly SIDE_AWAY_FROM_SPINE: Adobe.Incopy.TextWrapSideOptions;
			/**
			 * Binding side text wrap.
			 * @type {Adobe.Incopy.TextWrapSideOptions}
			 * @readonly
			 */
			public static readonly SIDE_TOWARDS_SPINE: Adobe.Incopy.TextWrapSideOptions;
			/**
			 * Alias for SIDE_AWAY_FROM_SPINE. Away from binding side text 
			 * wrap.
			 * @type {Adobe.Incopy.TextWrapSideOptions}
			 * @readonly
			 */
			public static readonly sideAwayFromSpine: Adobe.Incopy.TextWrapSideOptions;
			/**
			 * Alias for SIDE_TOWARDS_SPINE. Binding side text wrap.
			 * @type {Adobe.Incopy.TextWrapSideOptions}
			 * @readonly
			 */
			public static readonly sideTowardsSpine: Adobe.Incopy.TextWrapSideOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}