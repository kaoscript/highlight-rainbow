/**
 * kaoscript.js
 * Version 0.1.0
 * October 8th, 2016
 *
 * Copyright (c) 2016 Baptiste Augrain
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 **/
Rainbow.extend('kaoscript', [
	{
		name: 'comment',
		pattern: /\/\*[\s\S]*?\*\/|(\/\/|\#)(?!.*('|").*?[^:](\/\/|\#)).*?$/gm
	},
	{
		name: 'string',
		pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/g
	},
	{
		name: 'constant.numeric',
		pattern: /\b(?:0(?:b|B)[01]+|0(?:o|O)[0-7]+|0(?:x|X)[0-9a-fA-F]+|[0-9]+(?:\.[0-9]+)?)\b/g
	},
	{
		name: 'string.regexp',
		matches: {
			1: 'string.regexp.open',
			2: {
				name: 'constant.regexp.escape',
				pattern: /\\(.){1}/g
			},
			3: 'string.regexp.close',
			4: 'string.regexp.modifier'
		},
		pattern: /(\/)((?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+)(\/)(?!\/)([igm]{0,3})/g
	},
	{
		matches: {
			1: 'keyword',
			2: [
				{
					name: 'keyword',
					pattern: /\b(as)\b(?!\s*:)/g
				},
				{
					matches: {
						1: 'keyword',
						2: 'string'
					},
					pattern: /\b(from)\s*([^:][\w\W]*?)\s*?[\r\n]+/g
				}
			]
		},
		pattern: /\b(import)\s*\{([\w\W]*?)\}/
	},
	{
		matches: {
			1: 'keyword',
			2: [
				{
					name: 'keyword',
					pattern: /\b(as)\b(?!\s*:)/g
				},
				{
					matches: {
						1: 'keyword',
						2: 'string'
					},
					pattern: /\b(from)\s*([^:][\w\W]*)\s*/g
				}
			]
		},
		pattern: /\b(import)\s*([\w\W]*?)\s*?[\r\n]+/g
	},
	{
		name: 'variable.language.this',
		pattern: /\bthis\b/g
	},
	{
		name: 'variable.language.super',
		pattern: /super(?=\.|\()/g
	},
	{
		matches: {
			1: 'storage.type',
			2: 'entity.name'
		},
		pattern: /\b(const|func|enum|impl|let|struct|type)\s+([a-zA-Z_$][\w$]*)\b/g
	},
	{
		matches: {
			1: 'storage.type.class',
			2: 'entity.name.class',
			3: 'storage.modifier.extends',
			4: 'entity.other.inherited-class'
		},
		pattern: /\b(class)\s+([a-zA-Z_$][\w$]*)(?:\s+(extends)\s+([a-zA-Z_$][\w$]*))?(?=\s*\{)/g
	},
	{
		name: 'keyword',
		pattern: /\b(?:await|break|catch|continue|do|else|export|extern|finally|for|if|include|return|switch|throw|try|unless|until|while|as|by|from|in|is|of|til|to|with|async|extends|final|private|protected|public|static|new)\b(?!\s*:)/g
	},
	{
		name: 'support.type',
		pattern: /\b(?:Array|array|Boolean|bool|class|enum|Function|func|Number|number|Object|object|RegExp|String|string)\b(?!\s*:)/g
	},
	{
		name: 'constant.language',
		pattern: /true|false|null|Infinity|NaN/g
    },
    {
    	name: 'keyword.operator',
    	pattern: /(?:\+|\!|\-|&(gt|lt|amp);|\||\*|\=|\/|\^|\?|:)+|\.\.\./g
    },
    {
    	matches: {
    		1: 'function.call'
    	},
    	pattern: /([a-zA-Z_$][\w$]*)(?=\()/g
    },
]);

Rainbow.addAlias('ks', 'kaoscript');