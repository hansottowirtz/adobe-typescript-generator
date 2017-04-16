/// <reference path="implementation.d.ts"/>

declare const $: Adobe.$;
declare const File: typeof Adobe.Flash.Filesystem.File;
/**
 * Displays a platform-standard dialog containing a short
 * message and an OK button.
 * @param {string} message
 */
declare const alert: (message: string) => void;
/**
 * Displays a platform-standard dialog containing a short
 * message and two buttons labeled Yes and No.
 * @param {string} message
 */
declare const confirm: (message: string) => boolean;
/**
 * Displays a modal dialog that returns the user’s text input.
 * @param {string} message
 */
declare const prompt: (message: string) => string;
