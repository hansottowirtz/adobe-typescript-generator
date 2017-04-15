/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TextWrapSideOptions extends Adobe.Csawlib.CSEnumBase {
			/** Both sides text wrap. */
			public static readonly BOTH_SIDES: Adobe.Indesign.TextWrapSideOptions;
			/** Alias for BOTH_SIDES. Both sides text wrap. */
			public static readonly bothSides: Adobe.Indesign.TextWrapSideOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Largest side text wrap. */
			public static readonly LARGEST_AREA: Adobe.Indesign.TextWrapSideOptions;
			/** Alias for LARGEST_AREA. Largest side text wrap. */
			public static readonly largestArea: Adobe.Indesign.TextWrapSideOptions;
			/** Left side text wrap. */
			public static readonly LEFT_SIDE: Adobe.Indesign.TextWrapSideOptions;
			/** Alias for LEFT_SIDE. Left side text wrap. */
			public static readonly leftSide: Adobe.Indesign.TextWrapSideOptions;
			/** Right side text wrap. */
			public static readonly RIGHT_SIDE: Adobe.Indesign.TextWrapSideOptions;
			/** Alias for RIGHT_SIDE. Right side text wrap. */
			public static readonly rightSide: Adobe.Indesign.TextWrapSideOptions;
			/** Away from binding side text wrap. */
			public static readonly SIDE_AWAY_FROM_SPINE: Adobe.Indesign.TextWrapSideOptions;
			/** Binding side text wrap. */
			public static readonly SIDE_TOWARDS_SPINE: Adobe.Indesign.TextWrapSideOptions;
			/**
			 * Alias for SIDE_AWAY_FROM_SPINE. Away from binding side text 
			 * wrap.
			 */
			public static readonly sideAwayFromSpine: Adobe.Indesign.TextWrapSideOptions;
			/** Alias for SIDE_TOWARDS_SPINE. Binding side text wrap. */
			public static readonly sideTowardsSpine: Adobe.Indesign.TextWrapSideOptions;
			/** Constructor */
			public constructor();
		}
	}
}