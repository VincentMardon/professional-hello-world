"""
Professional Hello World - Python Edition

This module exists primarily to demonstrate how even the simplest possible
Python script can be wrapped in structure, comments, and imports that may
or may not be useful in the future.
"""

import os  # not used yet, but we believe in scalability
import sys  # imported for philosophical completeness
import json  # in case "Hello, World!" must be exported as JSON
from datetime import datetime, UTC  # absolutely overkill for a print
from typing import Optional  # generous with types, as professionals are

APP_NAME = "professional-hello-world"
VERSION = "0.0.1-dev"


def get_greeting(target: Optional[str] = None) -> str:
    """
    Return a greeting string.

    Args:
        target: optional name of the greeted entity.

    Returns:
        A greeting string, currently always "Hello, World!".
    """
    if target:
        return f"Hello, {target}!"
    return "Hello, World!"


def main() -> None:
    """
    Entry point for the hello script.
    Using an entry point for a single print is, of course, excessive,
    but this project is about pedagogical excess.
    """
    timestamp = datetime.now(UTC).isoformat()
    greeting = get_greeting()
    # simulate structured logging for a trivial output
    payload = {
        "app": APP_NAME,
        "version": VERSION,
        "timestamp": timestamp,
        "message": greeting,
    }
    # we print only the greeting, because that's what the user expects
    print(greeting)
    # ...but we could also dump the payload:
    # print(json.dumps(payload))


if __name__ == "__main__":
    # yes, this is absolutely unnecessary for such a simple script
    main()
