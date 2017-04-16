/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class RubyParentSpacing extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Ruby parent 121 aki. */
			public static readonly RUBY_PARENT_121_AKI: Adobe.Indesign.RubyParentSpacing;
			/** Ruby parent both sides. */
			public static readonly RUBY_PARENT_BOTH_SIDES: Adobe.Indesign.RubyParentSpacing;
			/** Applies the parent text aki to the ruby characters. */
			public static readonly RUBY_PARENT_EQUAL_AKI: Adobe.Indesign.RubyParentSpacing;
			/** Justifies ruby characters to both edges of the parent text. */
			public static readonly RUBY_PARENT_FULL_JUSTIFY: Adobe.Indesign.RubyParentSpacing;
			/** Does not base ruby spacing on parent text. */
			public static readonly RUBY_PARENT_NO_ADJUSTMENT: Adobe.Indesign.RubyParentSpacing;
			/** Alias for RUBY_PARENT_121_AKI. Ruby parent 121 aki. */
			public static readonly rubyParent121Aki: Adobe.Indesign.RubyParentSpacing;
			/** Alias for RUBY_PARENT_BOTH_SIDES. Ruby parent both sides. */
			public static readonly rubyParentBothSides: Adobe.Indesign.RubyParentSpacing;
			/**
			 * Alias for RUBY_PARENT_EQUAL_AKI. Applies the parent text aki 
			 * to the ruby characters.
			 */
			public static readonly rubyParentEqualAki: Adobe.Indesign.RubyParentSpacing;
			/**
			 * Alias for RUBY_PARENT_FULL_JUSTIFY. Justifies ruby 
			 * characters to both edges of the parent text.
			 */
			public static readonly rubyParentFullJustify: Adobe.Indesign.RubyParentSpacing;
			/**
			 * Alias for RUBY_PARENT_NO_ADJUSTMENT. Does not base ruby 
			 * spacing on parent text.
			 */
			public static readonly rubyParentNoAdjustment: Adobe.Indesign.RubyParentSpacing;
			/** Constructor */
			public constructor();
		}
	}
}