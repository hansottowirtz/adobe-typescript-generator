/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class LineAlignment extends Adobe.Csawlib.CSEnumBase {
			/** Center aligns the text. */
			public static readonly CENTER_LINE_ALIGN: Adobe.Indesign.LineAlignment;
			/**
			 * Justifies horizontal text on both the right and left and 
			 * center aligns the last line or justifies vertical text on 
			 * both the top and bottom and center aligns the last line.
			 */
			public static readonly CENTER_LINE_JUSTIFY: Adobe.Indesign.LineAlignment;
			/** Alias for CENTER_LINE_ALIGN. Center aligns the text. */
			public static readonly centerLineAlign: Adobe.Indesign.LineAlignment;
			/**
			 * Alias for CENTER_LINE_JUSTIFY. Justifies horizontal text on 
			 * both the right and left and center aligns the last line or 
			 * justifies vertical text on both the top and bottom and 
			 * center aligns the last line.
			 */
			public static readonly centerLineJustify: Adobe.Indesign.LineAlignment;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Justifies horizontal text on both the right and left or 
			 * justifies vertical text on both the top and bottom and gives 
			 * all lines a uniform length.
			 */
			public static readonly FULL_LINE_JUSTIFY: Adobe.Indesign.LineAlignment;
			/**
			 * Alias for FULL_LINE_JUSTIFY. Justifies horizontal text on 
			 * both the right and left or justifies vertical text on both 
			 * the top and bottom and gives all lines a uniform length.
			 */
			public static readonly fullLineJustify: Adobe.Indesign.LineAlignment;
			/** Left aligns horizontal text or top aligns vertical text. */
			public static readonly LEFT_OR_TOP_LINE_ALIGN: Adobe.Indesign.LineAlignment;
			/**
			 * Justifies horizontal text on both the right and left and 
			 * left aligns the last line or justifies vertical text on both 
			 * the top and bottom and top aligns the last line.
			 */
			public static readonly LEFT_OR_TOP_LINE_JUSTIFY: Adobe.Indesign.LineAlignment;
			/**
			 * Alias for LEFT_OR_TOP_LINE_ALIGN. Left aligns horizontal 
			 * text or top aligns vertical text.
			 */
			public static readonly leftOrTopLineAlign: Adobe.Indesign.LineAlignment;
			/**
			 * Alias for LEFT_OR_TOP_LINE_JUSTIFY. Justifies horizontal 
			 * text on both the right and left and left aligns the last 
			 * line or justifies vertical text on both the top and bottom 
			 * and top aligns the last line.
			 */
			public static readonly leftOrTopLineJustify: Adobe.Indesign.LineAlignment;
			/**
			 * Right aligns horizontal text or bottom aligns vertical text.
			 */
			public static readonly RIGHT_OR_BOTTOM_LINE_ALIGN: Adobe.Indesign.LineAlignment;
			/**
			 * Justifies horizontal text on both the right and left and 
			 * right aligns the last line or justifies vertical text on 
			 * both the top and bottom and bottom aligns the last line.
			 */
			public static readonly RIGHT_OR_BOTTOM_LINE_JUSTIFY: Adobe.Indesign.LineAlignment;
			/**
			 * Alias for RIGHT_OR_BOTTOM_LINE_ALIGN. Right aligns 
			 * horizontal text or bottom aligns vertical text.
			 */
			public static readonly rightOrBottomLineAlign: Adobe.Indesign.LineAlignment;
			/**
			 * Alias for RIGHT_OR_BOTTOM_LINE_JUSTIFY. Justifies horizontal 
			 * text on both the right and left and right aligns the last 
			 * line or justifies vertical text on both the top and bottom 
			 * and bottom aligns the last line.
			 */
			public static readonly rightOrBottomLineJustify: Adobe.Indesign.LineAlignment;
			/** Constructor */
			public constructor();
		}
	}
}