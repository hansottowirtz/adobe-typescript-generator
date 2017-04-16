/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Justification extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Aligns text to the side opposite the binding spine of the 
			 * page.
			 */
			public static readonly AWAY_FROM_BINDING_SIDE: Adobe.Indesign.Justification;
			/**
			 * Alias for AWAY_FROM_BINDING_SIDE. Aligns text to the side 
			 * opposite the binding spine of the page.
			 */
			public static readonly awayFromBindingSide: Adobe.Indesign.Justification;
			/** Center aligns the text. */
			public static readonly CENTER_ALIGN: Adobe.Indesign.Justification;
			/**
			 * Justifies text text and center aligns the last line in the 
			 * paragraph.
			 */
			public static readonly CENTER_JUSTIFIED: Adobe.Indesign.Justification;
			/** Alias for CENTER_ALIGN. Center aligns the text. */
			public static readonly centerAlign: Adobe.Indesign.Justification;
			/**
			 * Alias for CENTER_JUSTIFIED. Justifies text text and center 
			 * aligns the last line in the paragraph.
			 */
			public static readonly centerJustified: Adobe.Indesign.Justification;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Justifies the text, including the last line in the 
			 * paragraph.
			 */
			public static readonly FULLY_JUSTIFIED: Adobe.Indesign.Justification;
			/**
			 * Alias for FULLY_JUSTIFIED. Justifies the text, including the 
			 * last line in the paragraph.
			 */
			public static readonly fullyJustified: Adobe.Indesign.Justification;
			/** Left aligns the text. */
			public static readonly LEFT_ALIGN: Adobe.Indesign.Justification;
			/**
			 * Justifies the text and left aligns the last line in the 
			 * paragraph.
			 */
			public static readonly LEFT_JUSTIFIED: Adobe.Indesign.Justification;
			/** Alias for LEFT_ALIGN. Left aligns the text. */
			public static readonly leftAlign: Adobe.Indesign.Justification;
			/**
			 * Alias for LEFT_JUSTIFIED. Justifies the text and left aligns 
			 * the last line in the paragraph.
			 */
			public static readonly leftJustified: Adobe.Indesign.Justification;
			/** Right aligns the text. */
			public static readonly RIGHT_ALIGN: Adobe.Indesign.Justification;
			/**
			 * Justifies the text and right aligns the last line in the 
			 * paragraph.
			 */
			public static readonly RIGHT_JUSTIFIED: Adobe.Indesign.Justification;
			/** Alias for RIGHT_ALIGN. Right aligns the text. */
			public static readonly rightAlign: Adobe.Indesign.Justification;
			/**
			 * Alias for RIGHT_JUSTIFIED. Justifies the text and right 
			 * aligns the last line in the paragraph.
			 */
			public static readonly rightJustified: Adobe.Indesign.Justification;
			/** Aligns text to the binding spine of the page or spread. */
			public static readonly TO_BINDING_SIDE: Adobe.Indesign.Justification;
			/**
			 * Alias for TO_BINDING_SIDE. Aligns text to the binding spine 
			 * of the page or spread.
			 */
			public static readonly toBindingSide: Adobe.Indesign.Justification;
			/** Constructor */
			public constructor();
		}
	}
}