/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class RubyOverhang extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for NONE. Does not allow ruby overhang. */
			public static readonly none: Adobe.Incopy.RubyOverhang;
			/** Does not allow ruby overhang. */
			public static readonly NONE: Adobe.Incopy.RubyOverhang;
			/** Ruby is overhang one-half the size of one chararacter. */
			public static readonly RUBY_OVERHANG_HALF_CHAR: Adobe.Incopy.RubyOverhang;
			/** Ruby overhang is one-half ruby. */
			public static readonly RUBY_OVERHANG_HALF_RUBY: Adobe.Incopy.RubyOverhang;
			/** There is no ruby overhang size limit. */
			public static readonly RUBY_OVERHANG_NO_LIMIT: Adobe.Incopy.RubyOverhang;
			/** Ruby overhang is the size of one character. */
			public static readonly RUBY_OVERHANG_ONE_CHAR: Adobe.Incopy.RubyOverhang;
			/** Ruby overhang is one ruby. */
			public static readonly RUBY_OVERHANG_ONE_RUBY: Adobe.Incopy.RubyOverhang;
			/**
			 * Alias for RUBY_OVERHANG_HALF_CHAR. Ruby is overhang one-half 
			 * the size of one chararacter.
			 */
			public static readonly rubyOverhangHalfChar: Adobe.Incopy.RubyOverhang;
			/**
			 * Alias for RUBY_OVERHANG_HALF_RUBY. Ruby overhang is one-half 
			 * ruby.
			 */
			public static readonly rubyOverhangHalfRuby: Adobe.Incopy.RubyOverhang;
			/**
			 * Alias for RUBY_OVERHANG_NO_LIMIT. There is no ruby overhang 
			 * size limit.
			 */
			public static readonly rubyOverhangNoLimit: Adobe.Incopy.RubyOverhang;
			/**
			 * Alias for RUBY_OVERHANG_ONE_CHAR. Ruby overhang is the size 
			 * of one character.
			 */
			public static readonly rubyOverhangOneChar: Adobe.Incopy.RubyOverhang;
			/**
			 * Alias for RUBY_OVERHANG_ONE_RUBY. Ruby overhang is one ruby.
			 */
			public static readonly rubyOverhangOneRuby: Adobe.Incopy.RubyOverhang;
			/** Constructor */
			public constructor();
		}
	}
}