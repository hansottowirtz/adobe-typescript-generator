/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class RubyAlignments extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Ruby 1 aki. */
			public static readonly RUBY_1_AKI: Adobe.Incopy.RubyAlignments;
			/** Centers ruby relative to the parent text. */
			public static readonly RUBY_CENTER: Adobe.Incopy.RubyAlignments;
			/** Ruby equal aki. */
			public static readonly RUBY_EQUAL_AKI: Adobe.Incopy.RubyAlignments;
			/** Justifies ruby across the parent text. */
			public static readonly RUBY_FULL_JUSTIFY: Adobe.Incopy.RubyAlignments;
			/** Ruby JIS. */
			public static readonly RUBY_JIS: Adobe.Incopy.RubyAlignments;
			/**
			 * Aligns ruby with the left-most character in the parent text.
			 */
			public static readonly RUBY_LEFT: Adobe.Incopy.RubyAlignments;
			/**
			 * Aligns ruby with the right-most character in the parent 
			 * text.
			 */
			public static readonly RUBY_RIGHT: Adobe.Incopy.RubyAlignments;
			/** Alias for RUBY_1_AKI. Ruby 1 aki. */
			public static readonly ruby1Aki: Adobe.Incopy.RubyAlignments;
			/**
			 * Alias for RUBY_CENTER. Centers ruby relative to the parent 
			 * text.
			 */
			public static readonly rubyCenter: Adobe.Incopy.RubyAlignments;
			/** Alias for RUBY_EQUAL_AKI. Ruby equal aki. */
			public static readonly rubyEqualAki: Adobe.Incopy.RubyAlignments;
			/**
			 * Alias for RUBY_FULL_JUSTIFY. Justifies ruby across the 
			 * parent text.
			 */
			public static readonly rubyFullJustify: Adobe.Incopy.RubyAlignments;
			/** Alias for RUBY_JIS. Ruby JIS. */
			public static readonly rubyJis: Adobe.Incopy.RubyAlignments;
			/**
			 * Alias for RUBY_LEFT. Aligns ruby with the left-most 
			 * character in the parent text.
			 */
			public static readonly rubyLeft: Adobe.Incopy.RubyAlignments;
			/**
			 * Alias for RUBY_RIGHT. Aligns ruby with the right-most 
			 * character in the parent text.
			 */
			public static readonly rubyRight: Adobe.Incopy.RubyAlignments;
			/** Constructor */
			public constructor();
		}
	}
}