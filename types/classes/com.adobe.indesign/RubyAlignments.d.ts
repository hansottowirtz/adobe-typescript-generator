/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class RubyAlignments extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Ruby 1 aki. */
			public static readonly RUBY_1_AKI: Adobe.Indesign.RubyAlignments;
			/** Centers ruby relative to the parent text. */
			public static readonly RUBY_CENTER: Adobe.Indesign.RubyAlignments;
			/** Ruby equal aki. */
			public static readonly RUBY_EQUAL_AKI: Adobe.Indesign.RubyAlignments;
			/** Justifies ruby across the parent text. */
			public static readonly RUBY_FULL_JUSTIFY: Adobe.Indesign.RubyAlignments;
			/** Ruby JIS. */
			public static readonly RUBY_JIS: Adobe.Indesign.RubyAlignments;
			/**
			 * Aligns ruby with the left-most character in the parent text.
			 */
			public static readonly RUBY_LEFT: Adobe.Indesign.RubyAlignments;
			/**
			 * Aligns ruby with the right-most character in the parent 
			 * text.
			 */
			public static readonly RUBY_RIGHT: Adobe.Indesign.RubyAlignments;
			/** Alias for RUBY_1_AKI. Ruby 1 aki. */
			public static readonly ruby1Aki: Adobe.Indesign.RubyAlignments;
			/**
			 * Alias for RUBY_CENTER. Centers ruby relative to the parent 
			 * text.
			 */
			public static readonly rubyCenter: Adobe.Indesign.RubyAlignments;
			/** Alias for RUBY_EQUAL_AKI. Ruby equal aki. */
			public static readonly rubyEqualAki: Adobe.Indesign.RubyAlignments;
			/**
			 * Alias for RUBY_FULL_JUSTIFY. Justifies ruby across the 
			 * parent text.
			 */
			public static readonly rubyFullJustify: Adobe.Indesign.RubyAlignments;
			/** Alias for RUBY_JIS. Ruby JIS. */
			public static readonly rubyJis: Adobe.Indesign.RubyAlignments;
			/**
			 * Alias for RUBY_LEFT. Aligns ruby with the left-most 
			 * character in the parent text.
			 */
			public static readonly rubyLeft: Adobe.Indesign.RubyAlignments;
			/**
			 * Alias for RUBY_RIGHT. Aligns ruby with the right-most 
			 * character in the parent text.
			 */
			public static readonly rubyRight: Adobe.Indesign.RubyAlignments;
			/** Constructor */
			public constructor();
		}
	}
}