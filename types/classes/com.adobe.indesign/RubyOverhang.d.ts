/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class RubyOverhang extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NONE. Does not allow ruby overhang.
			 * @type {Adobe.Indesign.RubyOverhang}
			 * @readonly
			 */
			public static readonly none: Adobe.Indesign.RubyOverhang;
			/**
			 * Does not allow ruby overhang.
			 * @type {Adobe.Indesign.RubyOverhang}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Indesign.RubyOverhang;
			/**
			 * Ruby is overhang one-half the size of one chararacter.
			 * @type {Adobe.Indesign.RubyOverhang}
			 * @readonly
			 */
			public static readonly RUBY_OVERHANG_HALF_CHAR: Adobe.Indesign.RubyOverhang;
			/**
			 * Ruby overhang is one-half ruby.
			 * @type {Adobe.Indesign.RubyOverhang}
			 * @readonly
			 */
			public static readonly RUBY_OVERHANG_HALF_RUBY: Adobe.Indesign.RubyOverhang;
			/**
			 * There is no ruby overhang size limit.
			 * @type {Adobe.Indesign.RubyOverhang}
			 * @readonly
			 */
			public static readonly RUBY_OVERHANG_NO_LIMIT: Adobe.Indesign.RubyOverhang;
			/**
			 * Ruby overhang is the size of one character.
			 * @type {Adobe.Indesign.RubyOverhang}
			 * @readonly
			 */
			public static readonly RUBY_OVERHANG_ONE_CHAR: Adobe.Indesign.RubyOverhang;
			/**
			 * Ruby overhang is one ruby.
			 * @type {Adobe.Indesign.RubyOverhang}
			 * @readonly
			 */
			public static readonly RUBY_OVERHANG_ONE_RUBY: Adobe.Indesign.RubyOverhang;
			/**
			 * Alias for RUBY_OVERHANG_HALF_CHAR. Ruby is overhang one-half 
			 * the size of one chararacter.
			 * @type {Adobe.Indesign.RubyOverhang}
			 * @readonly
			 */
			public static readonly rubyOverhangHalfChar: Adobe.Indesign.RubyOverhang;
			/**
			 * Alias for RUBY_OVERHANG_HALF_RUBY. Ruby overhang is one-half 
			 * ruby.
			 * @type {Adobe.Indesign.RubyOverhang}
			 * @readonly
			 */
			public static readonly rubyOverhangHalfRuby: Adobe.Indesign.RubyOverhang;
			/**
			 * Alias for RUBY_OVERHANG_NO_LIMIT. There is no ruby overhang 
			 * size limit.
			 * @type {Adobe.Indesign.RubyOverhang}
			 * @readonly
			 */
			public static readonly rubyOverhangNoLimit: Adobe.Indesign.RubyOverhang;
			/**
			 * Alias for RUBY_OVERHANG_ONE_CHAR. Ruby overhang is the size 
			 * of one character.
			 * @type {Adobe.Indesign.RubyOverhang}
			 * @readonly
			 */
			public static readonly rubyOverhangOneChar: Adobe.Indesign.RubyOverhang;
			/**
			 * Alias for RUBY_OVERHANG_ONE_RUBY. Ruby overhang is one ruby.
			 * @type {Adobe.Indesign.RubyOverhang}
			 * @readonly
			 */
			public static readonly rubyOverhangOneRuby: Adobe.Indesign.RubyOverhang;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}