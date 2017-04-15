/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class RubyParentSpacing extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Ruby parent 121 aki. */
			public static readonly RUBY_PARENT_121_AKI: Adobe.Incopy.RubyParentSpacing;
			/** Ruby parent both sides. */
			public static readonly RUBY_PARENT_BOTH_SIDES: Adobe.Incopy.RubyParentSpacing;
			/** Applies the parent text aki to the ruby characters. */
			public static readonly RUBY_PARENT_EQUAL_AKI: Adobe.Incopy.RubyParentSpacing;
			/** Justifies ruby characters to both edges of the parent text. */
			public static readonly RUBY_PARENT_FULL_JUSTIFY: Adobe.Incopy.RubyParentSpacing;
			/** Does not base ruby spacing on parent text. */
			public static readonly RUBY_PARENT_NO_ADJUSTMENT: Adobe.Incopy.RubyParentSpacing;
			/** Alias for RUBY_PARENT_121_AKI. Ruby parent 121 aki. */
			public static readonly rubyParent121Aki: Adobe.Incopy.RubyParentSpacing;
			/** Alias for RUBY_PARENT_BOTH_SIDES. Ruby parent both sides. */
			public static readonly rubyParentBothSides: Adobe.Incopy.RubyParentSpacing;
			/**
			 * Alias for RUBY_PARENT_EQUAL_AKI. Applies the parent text aki 
			 * to the ruby characters.
			 */
			public static readonly rubyParentEqualAki: Adobe.Incopy.RubyParentSpacing;
			/**
			 * Alias for RUBY_PARENT_FULL_JUSTIFY. Justifies ruby 
			 * characters to both edges of the parent text.
			 */
			public static readonly rubyParentFullJustify: Adobe.Incopy.RubyParentSpacing;
			/**
			 * Alias for RUBY_PARENT_NO_ADJUSTMENT. Does not base ruby 
			 * spacing on parent text.
			 */
			public static readonly rubyParentNoAdjustment: Adobe.Incopy.RubyParentSpacing;
			/** Constructor */
			public constructor();
		}
	}
}